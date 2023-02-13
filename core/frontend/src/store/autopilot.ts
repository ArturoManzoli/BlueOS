import {
  getModule, Module, Mutation, VuexModule,
} from 'vuex-module-decorators'

import store from '@/store'
import Parameter from '@/types/autopilot/parameter'
// eslint-disable-next-line import/no-cycle
import ParameterFetcher from '@/types/autopilot/parameter-fetcher'

const parameterFetcher = new ParameterFetcher()

@Module({
  dynamic: true,
  store,
  name: 'autopilot_data',
})

class AutopilotStore extends VuexModule {
  parameters: Parameter[] = []

  parameters_loaded = 0

  parameters_total = 0

  vehicle = 'unknown'

  finished_loading = false

  metadata_loaded = false

  reboot_required = false

  get parameter() {
    return (name: string): Parameter | undefined => this.parameters.find((parameter) => parameter.name === name)
  }

  get parameterRegex() {
    return (pattern: string): Parameter[] => {
      const tester = new RegExp(pattern)
      return this.parameters.filter((parameter) => tester.test(parameter.name))
    }
  }

  get parameterFilter() {
    return (user_filter: (param: Parameter) => boolean) => this.parameters.filter(
      (param: Parameter) => user_filter(param),
    )
  }

  @Mutation
  reset(): void {
    this.parameters = []
    parameterFetcher.reset()
    this.finished_loading = false
    this.metadata_loaded = false
    this.parameters_loaded = 0
    this.parameters_total = 0
  }

  @Mutation
  setParameters(parameters: Parameter[]): void {
    this.parameters = parameters
  }

  @Mutation
  setMetadataLoaded(loaded: boolean): void {
    this.metadata_loaded = loaded
    this.finished_loading = this.parameters_loaded >= this.parameters_total && this.metadata_loaded
  }

  @Mutation
  setLoadedParametersCount(count: number): void {
    this.parameters_loaded = count
    this.finished_loading = this.parameters_loaded >= this.parameters_total && this.metadata_loaded
  }

  @Mutation
  setRebootRequired(required: boolean): void {
    this.reboot_required = required
  }

  @Mutation
  setTotalParametersCount(count: number): void {
    this.parameters_total = count
    this.finished_loading = this.parameters_loaded >= this.parameters_total && this.metadata_loaded
  }
}

export { AutopilotStore }

const autopilot_data: AutopilotStore = getModule(AutopilotStore)
parameterFetcher.setStore(autopilot_data)
export default autopilot_data
