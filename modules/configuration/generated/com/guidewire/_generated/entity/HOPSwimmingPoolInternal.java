package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPSwimmingPool.eti;HOPSwimmingPool.eix;HOPSwimmingPool.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPSwimmingPoolInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the AdditionalInformation field.
   * Additional information
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdditionalInformation();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPSwimmingPool getBasedOnValue();
  
  
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
  public entity.HOPSwimmingPool getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the HOPDwelling field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwelling getHOPDwelling();
  
  
  public gw.pl.persistence.core.Key getHOPDwellingID();
  
  
  /**
   * Gets the value of the PoolType field.
   * Swimming Pool Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPSwimmingPoolType getPoolType();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPSwimmingPool getSubtype();
  
  
  /**
   * Gets the value of the ApprovedFence field.
   * Is there a fence around the property
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isApprovedFence();
  
  
  /**
   * Gets the value of the DivingBoard field.
   * Is there a diving board
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDivingBoard();
  
  
  /**
   * Gets the value of the Slide field.
   * Is there a slide
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSlide();
  
  
  /**
   * Sets the value of the AdditionalInformation field.
   */
  public void setAdditionalInformation(java.lang.String value);
  
  
  /**
   * Sets the value of the ApprovedFence field.
   */
  public void setApprovedFence(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPSwimmingPool value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DivingBoard field.
   */
  public void setDivingBoard(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPSwimmingPool value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the HOPDwelling field.
   */
  public void setHOPDwelling(entity.HOPDwelling value);
  
  
  public void setHOPDwellingID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PoolType field.
   */
  public void setPoolType(typekey.HOPSwimmingPoolType value);
  
  
  /**
   * Sets the value of the Slide field.
   */
  public void setSlide(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPSwimmingPool value);
  
  
  
}