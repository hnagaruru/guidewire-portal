package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCLaborContact.eti;WCLaborContact.eix;WCLaborContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WCLaborContactInternal extends com.guidewire._generated.entity.WCPolicyContactRoleInternal, gw.api.domain.account.Mergeable {
  /**
   * Adds the given element to the Details array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToDetails(entity.WCLaborContactDetail element);
  
  
  /**
   * Gets the value of the Details field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WCLaborContactDetail[] getDetails();
  
  
  /**
   * Removes the given element from the Details array. This is achieved by marking the element for removal.
   */
  public void removeFromDetails(entity.WCLaborContactDetail element);
  
  
  /**
   * Removes the given element from the Details array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDetails(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Details field.
   */
  public void setDetails(entity.WCLaborContactDetail[] value);
  
  
  
}