package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyAddlInsured.eti;PolicyAddlInsured.eix;PolicyAddlInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyAddlInsuredInternal extends com.guidewire._generated.entity.PolicyContactRoleInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.account.Mergeable, gw.api.effdate.UniqueOnPolicyPeriod, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the PolicyAdditionalInsuredDetails array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPolicyAdditionalInsuredDetails(entity.PolicyAddlInsuredDetail element);
  
  
  /**
   * Gets the value of the PolicyAdditionalInsuredDetails field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyAddlInsuredDetail[] getPolicyAdditionalInsuredDetails();
  
  
  /**
   * Gets the value of the PolicyLine field.
   * The policy line this policy additional insured role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLine getPolicyLine();
  
  
  public gw.pl.persistence.core.Key getPolicyLineID();
  
  
  /**
   * Removes the given element from the PolicyAdditionalInsuredDetails array. This is achieved by marking the element for removal.
   */
  public void removeFromPolicyAdditionalInsuredDetails(entity.PolicyAddlInsuredDetail element);
  
  
  /**
   * Removes the given element from the PolicyAdditionalInsuredDetails array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPolicyAdditionalInsuredDetails(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the PolicyAdditionalInsuredDetails field.
   */
  public void setPolicyAdditionalInsuredDetails(entity.PolicyAddlInsuredDetail[] value);
  
  
  /**
   * Sets the value of the PolicyLine field.
   */
  public void setPolicyLine(entity.PolicyLine value);
  
  
  public void setPolicyLineID(gw.pl.persistence.core.Key value);
  
  
  
}