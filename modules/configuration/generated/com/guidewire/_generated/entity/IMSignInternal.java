package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSign.eti;IMSign.eix;IMSign.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMSignInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.IMSignCov element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSign getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this sign.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSignCov[] getCoverages();
  
  
  /**
   * Gets the value of the Description field.
   * Description of Sign.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSign getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the IMLocation field.
   * IMLocation of Sign.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMLocation getIMLocation();
  
  
  public gw.pl.persistence.core.Key getIMLocationID();
  
  
  /**
   * Gets the value of the IMSignPart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSignPart getIMSignPart();
  
  
  public gw.pl.persistence.core.Key getIMSignPartID();
  
  
  /**
   * Gets the value of the SignNumber field.
   * Sign number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSignNumber();
  
  
  /**
   * Gets the value of the SignType field.
   * Type of Sign
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SignType getSignType();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.IMSign getSubtype();
  
  
  /**
   * Gets the value of the Interior field.
   * Is this an interior sign?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInterior();
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.IMSignCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.IMSign value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.IMSignCov[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.IMSign value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IMLocation field.
   */
  public void setIMLocation(entity.IMLocation value);
  
  
  public void setIMLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IMSignPart field.
   */
  public void setIMSignPart(entity.IMSignPart value);
  
  
  public void setIMSignPartID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Interior field.
   */
  public void setInterior(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the SignNumber field.
   */
  public void setSignNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the SignType field.
   */
  public void setSignType(typekey.SignType value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.IMSign value);
  
  
  
}