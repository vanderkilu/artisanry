export const slideAnimation = {
    data() {
        return {
            transitionName: 'slide-right'
        }
    },
    watch: {
        incrementor(newValue, oldValue) {
            if (newValue  > oldValue) this.transitionName = 'slide-right'
            else this.transitionName = 'slide-left'
        }
    },
}