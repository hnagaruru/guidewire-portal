package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccountContactView.eti;AccountContactView.eix;AccountContactView.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccountContactViewInternal extends com.guidewire._generated.entity.KeyableBeanInternal {
  /**
   * Gets the value of the AccountContact field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AccountContact getAccountContact();
  
  
  public gw.pl.persistence.core.Key getAccountContactID();
  
  
  /**
   * Gets the value of the ContactDisplayName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactDisplayName();
  
  
  /**
   * Gets the value of the ContactSubtype field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Contact getContactSubtype();
  
  
  /**
   * Sets the value of the AccountContact field.
   */
  public void setAccountContact(entity.AccountContact value);
  
  
  public void setAccountContactID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContactDisplayName field.
   */
  public void setContactDisplayName(java.lang.String value);
  
  
  /**
   * Sets the value of the ContactSubtype field.
   */
  public void setContactSubtype(typekey.Contact value);
  
  
  
}