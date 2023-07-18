package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LinkedAddress.eti;LinkedAddress.eix;LinkedAddress.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LinkedAddressInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Addresses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAddresses(entity.Address element);
  
  
  /**
   * Gets the value of the Addresses field.
   * The linked group of addresses
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Address[] getAddresses();
  
  
  /**
   * Removes the given element from the Addresses array. This is achieved by marking the element for removal.
   */
  public void removeFromAddresses(entity.Address element);
  
  
  /**
   * Removes the given element from the Addresses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAddresses(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Addresses field.
   */
  public void setAddresses(entity.Address[] value);
  
  
  
}