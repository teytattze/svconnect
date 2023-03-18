export interface UseCase<TPort = unknown, TDto = unknown> {
  execute(payload?: TPort): Promise<TDto>;
}
