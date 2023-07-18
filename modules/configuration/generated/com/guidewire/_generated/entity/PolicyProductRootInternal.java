package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyProductRoot.eti;PolicyProductRoot.eix;PolicyProductRoot.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PolicyProductRootInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Account field.
   * Owning Account
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the EffDate field.
   * Policy Period effective date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffDate();
  
  
  /**
   * Gets the value of the JobType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Job getJobType();
  
  
  /**
   * Gets the value of the Producer field.
   * The Organization selected as "producer".
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getProducer();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The ProducerCode selected to identify "producer".
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCode();
  
  
  public gw.pl.persistence.core.Key getProducerCodeID();
  
  
  public gw.pl.persistence.core.Key getProducerID();
  
  
  /**
   * Gets the value of the State field.
   * Default Base State for new Submissions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the UWCompany field.
   * The selected Underwriting Company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWCompany getUWCompany();
  
  
  public gw.pl.persistence.core.Key getUWCompanyID();
  
  
  /**
   * Gets the value of the WrittenDate field.
   * Policy Period written date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getWrittenDate();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the EffDate field.
   */
  public void setEffDate(java.util.Date value);
  
  
  /**
   * Sets the value of the JobType field.
   */
  public void setJobType(typekey.Job value);
  
  
  /**
   * Sets the value of the Producer field.
   */
  public void setProducer(entity.Organization value);
  
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(entity.ProducerCode value);
  
  
  public void setProducerCodeID(gw.pl.persistence.core.Key value);
  
  
  public void setProducerID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the UWCompany field.
   */
  public void setUWCompany(entity.UWCompany value);
  
  
  public void setUWCompanyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the WrittenDate field.
   */
  public void setWrittenDate(java.util.Date value);
  
  
  
}