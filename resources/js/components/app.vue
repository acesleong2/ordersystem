<template>
    <h1>Hi</h1>
</template>
<script>
export default{
    created() {
        Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
    },
}
</script>