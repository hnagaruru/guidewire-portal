package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InclusionPerson.eti;InclusionPerson.eix;InclusionPerson.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InclusionPersonInternal extends com.guidewire._generated.entity.EffDatedInternal, gw.api.copier.EffDatedCopyable, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InclusionPerson getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Duties field.
   * Duties with the company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDuties();
  
  
  /**
   * Gets the value of the FirstName field.
   * First name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstName();
  
  
  /**
   * Gets the value of the FirstNameDenorm field.
   * denorm field for FirstName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameDenorm();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InclusionPerson getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Inclusion field.
   * Inclusion option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Inclusion getInclusion();
  
  
  /**
   * Gets the value of the LastName field.
   * Last name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastName();
  
  
  /**
   * Gets the value of the LastNameDenorm field.
   * denorm field for LastName
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameDenorm();
  
  
  /**
   * Gets the value of the Relationship field.
   * Relationship to named insured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Relationship getRelationship();
  
  
  /**
   * Gets the value of the State field.
   * Jurisdiction this person is included or excluded from
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the WCLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWCLine();
  
  
  public gw.pl.persistence.core.Key getWCLineID();
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.InclusionPerson value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Duties field.
   */
  public void setDuties(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstName field.
   */
  public void setFirstName(java.lang.String value);
  
  
  /**
   * Sets the value of the FirstNameDenorm field.
   */
  public void setFirstNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.InclusionPerson value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Inclusion field.
   */
  public void setInclusion(typekey.Inclusion value);
  
  
  /**
   * Sets the value of the LastName field.
   */
  public void setLastName(java.lang.String value);
  
  
  /**
   * Sets the value of the LastNameDenorm field.
   */
  public void setLastNameDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the Relationship field.
   */
  public void setRelationship(typekey.Relationship value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the WCLine field.
   */
  public void setWCLine(entity.WorkersCompLine value);
  
  
  public void setWCLineID(gw.pl.persistence.core.Key value);
  
  
  
}