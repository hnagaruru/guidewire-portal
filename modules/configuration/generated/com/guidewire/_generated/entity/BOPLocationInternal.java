package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocation.eti;BOPLocation.eix;BOPLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BOPLocationInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificLocation, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Buildings array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildings(entity.BOPBuilding element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.BOPLocationCov element);
  
  
  /**
   * Adds the given element to the LocationAnswers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLocationAnswers(entity.BOPLocationAnswer element);
  
  
  /**
   * Gets the value of the BOPLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessOwnersLine getBOPLine();
  
  
  public gw.pl.persistence.core.Key getBOPLineID();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocation getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Buildings field.
   * Buildings on this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPBuilding[] getBuildings();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocationCov[] getCoverages();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocation getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Location field.
   * Location of business exposure, e.g., one or more buildings.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  /**
   * Gets the value of the LocationAnswers field.
   * Set of answers for any questions on this location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPLocationAnswer[] getLocationAnswers();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the PrincipalOpsDesc field.
   * Principle operations and occupancy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrincipalOpsDesc();
  
  
  /**
   * Gets the value of the RiskClass field.
   * Foreign key to Risk Class Codes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RiskClass getRiskClass();
  
  
  public gw.pl.persistence.core.Key getRiskClassID();
  
  
  /**
   * Gets the value of the CityLimits field.
   * Whether the location is within city limits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCityLimits();
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildings(entity.BOPBuilding element);
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildings(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.BOPLocationCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
   */
  public void removeFromLocationAnswers(entity.BOPLocationAnswer element);
  
  
  /**
   * Removes the given element from the LocationAnswers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLocationAnswers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BOPLine field.
   */
  public void setBOPLine(entity.BusinessOwnersLine value);
  
  
  public void setBOPLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.BOPLocation value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Buildings field.
   */
  public void setBuildings(entity.BOPBuilding[] value);
  
  
  /**
   * Sets the value of the CityLimits field.
   */
  public void setCityLimits(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.BOPLocationCov[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.BOPLocation value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  /**
   * Sets the value of the LocationAnswers field.
   */
  public void setLocationAnswers(entity.BOPLocationAnswer[] value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrincipalOpsDesc field.
   */
  public void setPrincipalOpsDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the RiskClass field.
   */
  public void setRiskClass(entity.RiskClass value);
  
  
  public void setRiskClassID(gw.pl.persistence.core.Key value);
  
  
  
}