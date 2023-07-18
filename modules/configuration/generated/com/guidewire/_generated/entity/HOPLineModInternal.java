package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineMod.eti;HOPLineMod.eix;HOPLineMod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineModInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the HOPLineModifierCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineModifierCosts(entity.HOPLineModifierCost element);
  
  
  /**
   * Adds the given element to the HOPLineRateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineRateFactors(entity.HOPLineRF element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineMod getBasedOnValue();
  
  
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
  public entity.HOPLineMod getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLine getHOPLine();
  
  
  public gw.pl.persistence.core.Key getHOPLineID();
  
  
  /**
   * Gets the value of the HOPLineModifierCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineModifierCost[] getHOPLineModifierCosts();
  
  
  /**
   * Gets the value of the HOPLineRateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineRF[] getHOPLineRateFactors();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPLineMod getSubtype();
  
  
  /**
   * Removes the given element from the HOPLineModifierCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineModifierCosts(entity.HOPLineModifierCost element);
  
  
  /**
   * Removes the given element from the HOPLineModifierCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineModifierCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPLineRateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineRateFactors(entity.HOPLineRF element);
  
  
  /**
   * Removes the given element from the HOPLineRateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineRateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPLineMod value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPLineMod value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPLine field.
   */
  public void setHOPLine(entity.HOPLine value);
  
  
  public void setHOPLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPLineModifierCosts field.
   */
  public void setHOPLineModifierCosts(entity.HOPLineModifierCost[] value);
  
  
  /**
   * Sets the value of the HOPLineRateFactors field.
   */
  public void setHOPLineRateFactors(entity.HOPLineRF[] value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPLineMod value);
  
  
  
}