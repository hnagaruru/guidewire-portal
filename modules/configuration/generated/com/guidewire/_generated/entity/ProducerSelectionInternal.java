package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProducerSelection.eti;ProducerSelection.eix;ProducerSelection.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ProducerSelectionInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.product.impl.ProducerSelectionInternalMethods {
  /**
   * Gets the value of the Account field.
   * Account for new Submissions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the DefaultPPEffDate field.
   * Default Policy Period effective date for new Submissions
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDefaultPPEffDate();
  
  
  /**
   * Gets the value of the Producer field.
   * The Organization selected as "producer" of a Submission.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getProducer();
  
  
  /**
   * Gets the value of the ProducerCode field.
   * The ProducerCode selected to identify "producer" of a Submission.
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
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DefaultPPEffDate field.
   */
  public void setDefaultPPEffDate(java.util.Date value);
  
  
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
  
  
  
}