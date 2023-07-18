package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCost.eti;APDCost.eix;APDCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCostInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Adds the given element to the Transactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTransactions(entity.APDTransaction element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCost getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCost getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the ManualPolicyLine field.
   * Manual Products line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDManualPolicyLine getManualPolicyLine();
  
  
  public gw.pl.persistence.core.Key getManualPolicyLineID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCost getSubtype();
  
  
  /**
   * Gets the value of the Transactions field.
   * APD Transactions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDTransaction[] getTransactions();
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   */
  public void removeFromTransactions(entity.APDTransaction element);
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.APDCost value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.APDCost value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ManualPolicyLine field.
   */
  public void setManualPolicyLine(entity.APDManualPolicyLine value);
  
  
  public void setManualPolicyLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDCost value);
  
  
  /**
   * Sets the value of the Transactions field.
   */
  public void setTransactions(entity.APDTransaction[] value);
  
  
  
}