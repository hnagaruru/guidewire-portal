package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDManualPolicyLine.eti;APDManualPolicyLine.eix;APDManualPolicyLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDManualPolicyLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the APDCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToAPDCosts(entity.APDCost element);
  
  
  /**
   * Adds the given element to the RiskCoverables array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRiskCoverables(entity.APDRiskCoverable element);
  
  
  /**
   * Gets the value of the APDCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCost[] getAPDCosts();
  
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of this entity on bound policy periods.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal();
  
  
  /**
   * Gets the value of the RiskCoverables field.
   * All the coverables that make up the manual policy, irrespective of their relationships
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskCoverable[] getRiskCoverables();
  
  
  /**
   * Removes the given element from the APDCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromAPDCosts(entity.APDCost element);
  
  
  /**
   * Removes the given element from the APDCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromAPDCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RiskCoverables array. This is achieved by marking the element for removal.
   */
  public void removeFromRiskCoverables(entity.APDRiskCoverable element);
  
  
  /**
   * Removes the given element from the RiskCoverables array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRiskCoverables(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the APDCosts field.
   */
  public void setAPDCosts(entity.APDCost[] value);
  
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value);
  
  
  /**
   * Sets the value of the RiskCoverables field.
   */
  public void setRiskCoverables(entity.APDRiskCoverable[] value);
  
  
  
}