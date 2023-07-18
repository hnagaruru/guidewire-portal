package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ImpactTestingTestCase.eti;ImpactTestingTestCase.eix;ImpactTestingTestCase.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ImpactTestingTestCaseInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Periods array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPeriods(entity.ImpactTestingPolicyPeriod element);
  
  
  /**
   * Adds the given element to the Ratebooks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRatebooks(entity.ImpactTestingRateBook element);
  
  
  /**
   * Gets the value of the Name field.
   * Test case name
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Periods field.
   * Set of impact testing policy periods associated with this .
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ImpactTestingPolicyPeriod[] getPeriods();
  
  
  /**
   * Gets the value of the Ratebooks field.
   * Set of Ratebooks which have been chosen specifically for Impact Testing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ImpactTestingRateBook[] getRatebooks();
  
  
  /**
   * Gets the value of the RequestingUser field.
   * The user that initiates a request to export the ImpactTestingPolicyPeriods to Excel.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getRequestingUser();
  
  
  public gw.pl.persistence.core.Key getRequestingUserID();
  
  
  /**
   * Gets the value of the Result field.
   * The test case result
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ImpactTestCaseResult getResult();
  
  
  public gw.pl.persistence.core.Key getResultID();
  
  
  /**
   * Gets the value of the SearchCriteria field.
   * The search criteria associated with this test case
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSearchCriteria();
  
  
  /**
   * Gets the value of the Status field.
   * The test case status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ImpactTestCaseStatus getStatus();
  
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   */
  public void removeFromPeriods(entity.ImpactTestingPolicyPeriod element);
  
  
  /**
   * Removes the given element from the Periods array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPeriods(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
   */
  public void removeFromRatebooks(entity.ImpactTestingRateBook element);
  
  
  /**
   * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRatebooks(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Periods field.
   */
  public void setPeriods(entity.ImpactTestingPolicyPeriod[] value);
  
  
  /**
   * Sets the value of the Ratebooks field.
   */
  public void setRatebooks(entity.ImpactTestingRateBook[] value);
  
  
  /**
   * Sets the value of the RequestingUser field.
   */
  public void setRequestingUser(entity.User value);
  
  
  public void setRequestingUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Result field.
   */
  public void setResult(entity.ImpactTestCaseResult value);
  
  
  public void setResultID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SearchCriteria field.
   */
  public void setSearchCriteria(java.lang.String value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ImpactTestCaseStatus value);
  
  
  
}