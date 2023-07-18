package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMLocation.eti;IMLocation.eix;IMLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMLocationInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.LineSpecificLocation, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Buildings array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBuildings(entity.IMBuilding element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMLocation getBasedOnValue();
  
  
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
  public entity.IMBuilding[] getBuildings();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMLocation getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the IMLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InlandMarineLine getIMLine();
  
  
  public gw.pl.persistence.core.Key getIMLineID();
  
  
  /**
   * Gets the value of the Location field.
   * Location of inland marine exposure, e.g., one or more buildings.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyLocation getLocation();
  
  
  public gw.pl.persistence.core.Key getLocationID();
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   */
  public void removeFromBuildings(entity.IMBuilding element);
  
  
  /**
   * Removes the given element from the Buildings array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBuildings(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.IMLocation value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Buildings field.
   */
  public void setBuildings(entity.IMBuilding[] value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.IMLocation value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IMLine field.
   */
  public void setIMLine(entity.InlandMarineLine value);
  
  
  public void setIMLineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Location field.
   */
  public void setLocation(entity.PolicyLocation value);
  
  
  public void setLocationID(gw.pl.persistence.core.Key value);
  
  
  
}