package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyNamedInsured.eti;PolicyNamedInsured.eix;PolicyNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyNamedInsuredInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal, com.guidewire.pc.domain.contact.PolicyNamedInsuredPublicMethods, gw.api.domain.account.Mergeable {
  /**
   * Adds the given element to the LocationNamedInsureds array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationNamedInsureds(entity.LocationNamedInsured element);
  
  
  /**
   * Gets the value of the LocationNamedInsureds field.
   * The named insured covered at this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LocationNamedInsured[] getLocationNamedInsureds();
  
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationNamedInsureds(entity.LocationNamedInsured element);
  
  
  /**
   * Removes the given element from the LocationNamedInsureds array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationNamedInsureds(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the LocationNamedInsureds field.
   */
  public void setLocationNamedInsureds(entity.LocationNamedInsured[] value);
  
  
  
}