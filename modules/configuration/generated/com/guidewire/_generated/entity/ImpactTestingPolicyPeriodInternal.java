package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ImpactTestingPolicyPeriod.eti;ImpactTestingPolicyPeriod.eix;ImpactTestingPolicyPeriod.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ImpactTestingPolicyPeriodInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the AccountNumber field.
   * Denorm field, the account of the original period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumber();
  
  
  /**
   * Gets the value of the AccountNumberDenorm field.
   * denorm field for AccountNumber
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumberDenorm();
  
  
  /**
   * Gets the value of the BaselinePeriod field.
   * The baseline policy period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBaselinePeriod();
  
  
  public gw.pl.persistence.core.Key getBaselinePeriodID();
  
  
  /**
   * Gets the value of the OriginalPeriod field.
   * The original policy period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getOriginalPeriod();
  
  
  public gw.pl.persistence.core.Key getOriginalPeriodID();
  
  
  /**
   * Gets the value of the PolicyNumber field.
   * Denorm field, the policy number for the original period
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber();
  
  
  /**
   * Gets the value of the TestCase field.
   * The impact testing test case
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ImpactTestingTestCase getTestCase();
  
  
  public gw.pl.persistence.core.Key getTestCaseID();
  
  
  /**
   * Gets the value of the TestPeriod field.
   * The new policy period being rated for comparison
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getTestPeriod();
  
  
  public gw.pl.persistence.core.Key getTestPeriodID();
  
  
  /**
   * Gets the value of the TestPrepErrorMessage field.
   * The error message generated while processing the test prep job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTestPrepErrorMessage();
  
  
  /**
   * Gets the value of the TestPrepProgress field.
   * Test prep progress
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ImpactTestingJobProgress getTestPrepProgress();
  
  
  /**
   * Gets the value of the TestPrepResult field.
   * The result of the test prep processing
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ImpactTestingPrepResult getTestPrepResult();
  
  
  /**
   * Gets the value of the TestRunErrorMessage field.
   * The error message generated while processing the test run job
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTestRunErrorMessage();
  
  
  /**
   * Gets the value of the TestRunProgress field.
   * Test run progress
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ImpactTestingJobProgress getTestRunProgress();
  
  
  /**
   * Gets the value of the TestRunResult field.
   * Processing result of the test run
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ImpactTestingRunResult getTestRunResult();
  
  
  /**
   * Sets the value of the AccountNumber field.
   */
  public void setAccountNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the AccountNumberDenorm field.
   */
  public void setAccountNumberDenorm(java.lang.String value);
  
  
  /**
   * Sets the value of the BaselinePeriod field.
   */
  public void setBaselinePeriod(entity.PolicyPeriod value);
  
  
  public void setBaselinePeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OriginalPeriod field.
   */
  public void setOriginalPeriod(entity.PolicyPeriod value);
  
  
  public void setOriginalPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the TestCase field.
   */
  public void setTestCase(entity.ImpactTestingTestCase value);
  
  
  public void setTestCaseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TestPeriod field.
   */
  public void setTestPeriod(entity.PolicyPeriod value);
  
  
  public void setTestPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TestPrepErrorMessage field.
   */
  public void setTestPrepErrorMessage(java.lang.String value);
  
  
  /**
   * Sets the value of the TestPrepProgress field.
   */
  public void setTestPrepProgress(typekey.ImpactTestingJobProgress value);
  
  
  /**
   * Sets the value of the TestPrepResult field.
   */
  public void setTestPrepResult(typekey.ImpactTestingPrepResult value);
  
  
  /**
   * Sets the value of the TestRunErrorMessage field.
   */
  public void setTestRunErrorMessage(java.lang.String value);
  
  
  /**
   * Sets the value of the TestRunProgress field.
   */
  public void setTestRunProgress(typekey.ImpactTestingJobProgress value);
  
  
  /**
   * Sets the value of the TestRunResult field.
   */
  public void setTestRunResult(typekey.ImpactTestingRunResult value);
  
  
  
}