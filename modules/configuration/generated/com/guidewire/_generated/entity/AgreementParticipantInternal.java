package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AgreementParticipant.eti;AgreementParticipant.eix;AgreementParticipant.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AgreementParticipantInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.reinsurance.AgreementParticipantPublicMethods, gw.api.contact.ContactOwner {
  /**
   * Gets the value of the Agreement field.
   * The reinsurance agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getAgreement();
  
  
  public gw.pl.persistence.core.Key getAgreementID();
  
  
  /**
   * Gets the value of the CedingRate field.
   * If a non-proportional treaty is divided among multiple participants, then they will each negotiate a rate for their participation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCedingRate();
  
  
  /**
   * Gets the value of the CommissionRate field.
   * This is tha actual commission that should be paid to each participant, defined as a % of their share of ceded premiums.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCommissionRate();
  
  
  /**
   * Gets the value of the ContactPublicID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactPublicID();
  
  
  /**
   * Gets the value of the FlatPremium field.
   * If a Fac agreement is divided among multiple participants, then they will each negotiate a price for their participation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getFlatPremium();
  
  
  /**
   * Gets the value of the FlatPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getFlatPremium_amt();
  
  
  /**
   * Gets the value of the FlatPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getFlatPremium_cur();
  
  
  /**
   * Gets the value of the Participant field.
   * The reinsurer.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getParticipant();
  
  
  public gw.pl.persistence.core.Key getParticipantID();
  
  
  /**
   * Gets the value of the RefNumber field.
   * Some agreement ID provided by the reinsurer, equivalent to the carrier’s policy number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRefNumber();
  
  
  /**
   * Gets the value of the RiskShare field.
   * Participants share of any losses to the agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRiskShare();
  
  
  /**
   * Sets the value of the Agreement field.
   */
  public void setAgreement(entity.RIAgreement value);
  
  
  public void setAgreementID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CedingRate field.
   */
  public void setCedingRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CommissionRate field.
   */
  public void setCommissionRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ContactPublicID field.
   */
  public void setContactPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the FlatPremium field.
   */
  public void setFlatPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the FlatPremium_amt field.
   */
  public void setFlatPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the FlatPremium_cur field.
   */
  public void setFlatPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Participant field.
   */
  public void setParticipant(entity.Contact value);
  
  
  public void setParticipantID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RefNumber field.
   */
  public void setRefNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the RiskShare field.
   */
  public void setRiskShare(java.math.BigDecimal value);
  
  
  
}