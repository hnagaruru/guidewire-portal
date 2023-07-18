package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInterest.eti;PolicyAddlInterest.eix;PolicyAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyAddlInterestInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal, gw.api.domain.account.Mergeable {
  /**
   * Adds the given element to the AdditionalInterestDetails array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAdditionalInterestDetails(entity.AddlInterestDetail element);
  
  
  /**
   * Gets the value of the AdditionalInterestDetails field.
   * Details of how this Additional Interest relates to items of interest on the Policy (e.g., a PAVehicle
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AddlInterestDetail[] getAdditionalInterestDetails();
  
  
  /**
   * Removes the given element from the AdditionalInterestDetails array. This is achieved by marking the element for removal.
   */
  public void removeFromAdditionalInterestDetails(entity.AddlInterestDetail element);
  
  
  /**
   * Removes the given element from the AdditionalInterestDetails array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAdditionalInterestDetails(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AdditionalInterestDetails field.
   */
  public void setAdditionalInterestDetails(entity.AddlInterestDetail[] value);
  
  
  
}