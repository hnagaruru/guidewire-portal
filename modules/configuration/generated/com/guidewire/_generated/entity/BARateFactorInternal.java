package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BARateFactor.eti;BARateFactor.eix;BARateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BARateFactorInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.RateFactorInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.RateFactorAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BAModifier field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAModifier getBAModifier();
  
  
  public gw.pl.persistence.core.Key getBAModifierID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BARateFactor getBasedOnValue();
  
  
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
  public entity.BARateFactor getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Sets the value of the BAModifier field.
   */
  public void setBAModifier(entity.BAModifier value);
  
  
  public void setBAModifierID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BARateFactor value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BARateFactor value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  
}