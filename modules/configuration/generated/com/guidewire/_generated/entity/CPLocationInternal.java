package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPLocation.eti;CPLocation.eix;CPLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CPLocationInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.domain.LineSpecificLocation, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Buildings array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildings(entity.CPBuilding element);
  
  
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.CPLocationCov element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPLocation getBasedOnValue();
  
  
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
  public entity.CPBuilding[] getBuildings();
  
  
  /**
   * Gets the value of the CPLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CommercialPropertyLine getCPLine();
  
  
  public gw.pl.persistence.core.Key getCPLineID();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this location.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPLocationCov[] getCoverages();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CPLocation getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Location field.
   * Location of business exposure, e.g., one or more buildings.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Gets the value of the PrincipalOpsDesc field.
   * Principle operations and occupancy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPrincipalOpsDesc();
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildings(entity.CPBuilding element);
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildings(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.CPLocationCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.CPLocation value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Buildings field.
   */
  public void setBuildings(entity.CPBuilding[] value);
  
  
  /**
   * Sets the value of the CPLine field.
   */
  public void setCPLine(entity.CommercialPropertyLine value);
  
  
  public void setCPLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.CPLocationCov[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.CPLocation value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrincipalOpsDesc field.
   */
  public void setPrincipalOpsDesc(java.lang.String value);
  
  
  
}