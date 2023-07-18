package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLCost.eti;GLCost.eix;GLCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLCostInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Adds the given element to the Transactions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTransactions(entity.GLTransaction element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLCost getBasedOnValue();
  
  
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
  public entity.GLCost getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the GeneralLiabilityLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GeneralLiabilityLine getGeneralLiabilityLine();
  
  
  public gw.pl.persistence.core.Key getGeneralLiabilityLineID();
  
  
  /**
   * Gets the value of the SplitType field.
   * The liability limit split type associated with this cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GLCostSplitType getSplitType();
  
  
  /**
   * Gets the value of the Subline field.
   * The subline associated with this cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GLCostSubline getSubline();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GLCost getSubtype();
  
  
  /**
   * Gets the value of the Transactions field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.GLTransaction[] getTransactions();
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   */
  public void removeFromTransactions(entity.GLTransaction element);
  
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.GLCost value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.GLCost value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the GeneralLiabilityLine field.
   */
  public void setGeneralLiabilityLine(entity.GeneralLiabilityLine value);
  
  
  public void setGeneralLiabilityLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SplitType field.
   */
  public void setSplitType(typekey.GLCostSplitType value);
  
  
  /**
   * Sets the value of the Subline field.
   */
  public void setSubline(typekey.GLCostSubline value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.GLCost value);
  
  
  /**
   * Sets the value of the Transactions field.
   */
  public void setTransactions(entity.GLTransaction[] value);
  
  
  
}