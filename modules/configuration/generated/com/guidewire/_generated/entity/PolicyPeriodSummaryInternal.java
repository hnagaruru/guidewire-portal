package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriodSummary.eti;PolicyPeriodSummary.eix;PolicyPeriodSummary.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyPeriodSummaryInternal extends com.guidewire._generated.entity.KeyableBeanInternal, com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods {
  /**
   * Gets the value of the AccountNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumber();
  
  
  /**
   * Gets the value of the BranchName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBranchName();
  
  
  /**
   * Gets the value of the BranchNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBranchNumber();
  
  
  /**
   * Gets the value of the CancellationDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCancellationDate();
  
  
  /**
   * Gets the value of the EditEffectiveDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEditEffectiveDate();
  
  
  /**
   * Gets the value of the InsuredDisplayName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInsuredDisplayName();
  
  
  /**
   * Gets the value of the Job field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the ModelNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getModelNumber();
  
  
  /**
   * Gets the value of the PeriodEnd field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPeriodEnd();
  
  
  /**
   * Gets the value of the PeriodId field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getPeriodId();
  
  
  /**
   * Gets the value of the PeriodStart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPeriodStart();
  
  
  /**
   * Gets the value of the PolicyNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber();
  
  
  /**
   * Gets the value of the PolicyPeriodId field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getPolicyPeriodId();
  
  
  /**
   * Gets the value of the PolicyTermArchiveState field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyTermArchiveState getPolicyTermArchiveState();
  
  
  /**
   * Gets the value of the ProducerCodeOfRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfRecord();
  
  
  public gw.pl.persistence.core.Key getProducerCodeOfRecordID();
  
  
  /**
   * Gets the value of the ProducerCodeOfService field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfService();
  
  
  public gw.pl.persistence.core.Key getProducerCodeOfServiceID();
  
  
  /**
   * Gets the value of the ProducerName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProducerName();
  
  
  /**
   * Gets the value of the ProductCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyPeriodStatus getStatus();
  
  
  /**
   * Sets the value of the AccountNumber field.
   */
  public void setAccountNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the BranchName field.
   */
  public void setBranchName(java.lang.String value);
  
  
  /**
   * Sets the value of the BranchNumber field.
   */
  public void setBranchNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the CancellationDate field.
   */
  public void setCancellationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the EditEffectiveDate field.
   */
  public void setEditEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the InsuredDisplayName field.
   */
  public void setInsuredDisplayName(java.lang.String value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ModelNumber field.
   */
  public void setModelNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PeriodEnd field.
   */
  public void setPeriodEnd(java.util.Date value);
  
  
  /**
   * Sets the value of the PeriodId field.
   */
  public void setPeriodId(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PeriodStart field.
   */
  public void setPeriodStart(java.util.Date value);
  
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyPeriodId field.
   */
  public void setPolicyPeriodId(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyTermArchiveState field.
   */
  public void setPolicyTermArchiveState(typekey.PolicyTermArchiveState value);
  
  
  /**
   * Sets the value of the ProducerCodeOfRecord field.
   */
  public void setProducerCodeOfRecord(entity.ProducerCode value);
  
  
  public void setProducerCodeOfRecordID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerCodeOfService field.
   */
  public void setProducerCodeOfService(entity.ProducerCode value);
  
  
  public void setProducerCodeOfServiceID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProducerName field.
   */
  public void setProducerName(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.PolicyPeriodStatus value);
  
  
  
}