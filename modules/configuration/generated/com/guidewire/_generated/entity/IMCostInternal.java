package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMCost.eti;IMCost.eix;IMCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMCostInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Adds the given element to the Transactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTransactions(entity.IMTransaction element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMCost getBasedOnValue();
  
  
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
  public entity.IMCost getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the InlandMarineLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InlandMarineLine getInlandMarineLine();
  
  
  public gw.pl.persistence.core.Key getInlandMarineLineID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.IMCost getSubtype();
  
  
  /**
   * Gets the value of the Transactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMTransaction[] getTransactions();
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   */
  public void removeFromTransactions(entity.IMTransaction element);
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.IMCost value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.IMCost value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InlandMarineLine field.
   */
  public void setInlandMarineLine(entity.InlandMarineLine value);
  
  
  public void setInlandMarineLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.IMCost value);
  
  
  /**
   * Sets the value of the Transactions field.
   */
  public void setTransactions(entity.IMTransaction[] value);
  
  
  
}