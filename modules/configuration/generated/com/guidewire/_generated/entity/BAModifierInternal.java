package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAModifier.eti;BAModifier.eix;BAModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BAModifierInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.ModifierInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.ModifierAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the BARateFactors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBARateFactors(entity.BARateFactor element);
  
  
  /**
   * Gets the value of the BALine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBALine();
  
  
  public gw.pl.persistence.core.Key getBALineID();
  
  
  /**
   * Gets the value of the BARateFactors field.
   * Individual components of the rating factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BARateFactor[] getBARateFactors();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAModifier getBasedOnValue();
  
  
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
  public entity.BAModifier getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BAModifier getSubtype();
  
  
  /**
   * Removes the given element from the BARateFactors array. This is achieved by marking the element for removal.
   */
  public void removeFromBARateFactors(entity.BARateFactor element);
  
  
  /**
   * Removes the given element from the BARateFactors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBARateFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BALine field.
   */
  public void setBALine(entity.BusinessAutoLine value);
  
  
  public void setBALineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BARateFactors field.
   */
  public void setBARateFactors(entity.BARateFactor[] value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BAModifier value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BAModifier value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.BAModifier value);
  
  
  
}