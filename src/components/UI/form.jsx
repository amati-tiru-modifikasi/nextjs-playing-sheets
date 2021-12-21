import { useForm } from 'react-hook-form'
import React from 'react'
import {
  FormErrorMessage,
  Textarea,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react'

export default function Form() {

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl isInvalid={errors.nama}>
        <FormLabel htmlFor='nama'>Nama</FormLabel>
        <Input
          id='nama'
          placeholder='nama'
          {...register('nama', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
            {errors.nama && errors.nama.message}
          </FormErrorMessage>
        </FormControl>
        
         <FormControl isInvalid={errors.pesan}>
        <FormLabel htmlFor='pesan'>Pesan</FormLabel>
        <Textarea
          id='pesan'
          placeholder='pesan yang ingin disampaikan'
          {...register('pesan', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>


        <Button
          colorScheme="facebook"
          variant="outline"
          mb="2"
          px="12"
          fontWeight="600"
          size="lg"
          isLoading={isSubmitting}
          type='submit'
        >
          Simpan
        </Button>
      </Stack>
    </FormControl>
  )
}