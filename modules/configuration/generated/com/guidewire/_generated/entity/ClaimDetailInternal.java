package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ClaimDetail.eti;ClaimDetail.eix;ClaimDetail.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ClaimDetailInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Claim field.
   * The claim with which this is associated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Claim getClaim();
  
  
  public gw.pl.persistence.core.Key getClaimID();
  
  
  /**
   * Gets the value of the ClaimInfoPublicID field.
   * ClaimInfo Public ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimInfoPublicID();
  
  
  /**
   * Gets the value of the ClaimPublicID field.
   * @deprecated Claim Public ID
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimPublicID();
  
  
  /**
   * Gets the value of the Description field.
   * Additional Description of the claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the LossCause field.
   * Cause of loss
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLossCause();
  
  
  /**
   * Gets the value of the Recoveries field.
   * Sum of all submitted recoveries on claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getRecoveries();
  
  
  /**
   * Gets the value of the Recoveries_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRecoveries_amt();
  
  
  /**
   * Gets the value of the Recoveries_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getRecoveries_cur();
  
  
  /**
   * Gets the value of the RemainingReserves field.
   * Sum of all submitted and awaiting submission reserves - all approved eroding payments
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getRemainingReserves();
  
  
  /**
   * Gets the value of the RemainingReserves_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRemainingReserves_amt();
  
  
  /**
   * Gets the value of the RemainingReserves_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getRemainingReserves_cur();
  
  
  /**
   * Gets the value of the TotalPaid field.
   * Sum of all submitted and awiting submission payments whose scheduled send date is today or earlier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPaid();
  
  
  /**
   * Gets the value of the TotalPaid_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPaid_amt();
  
  
  /**
   * Gets the value of the TotalPaid_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPaid_cur();
  
  
  /**
   * Gets the value of the Injuries field.
   * Are there any injury incidents associated to the claim?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isInjuries();
  
  
  /**
   * Gets the value of the Litigation field.
   * Are there matters associated to the claim?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLitigation();
  
  
  /**
   * Sets the value of the Claim field.
   */
  public void setClaim(entity.Claim value);
  
  
  public void setClaimID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ClaimInfoPublicID field.
   */
  public void setClaimInfoPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the ClaimPublicID field.
   * @deprecated Claim Public ID
   */
  @java.lang.Deprecated
  public void setClaimPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Injuries field.
   */
  public void setInjuries(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Litigation field.
   */
  public void setLitigation(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LossCause field.
   */
  public void setLossCause(java.lang.String value);
  
  
  /**
   * Sets the value of the Recoveries field.
   */
  public void setRecoveries(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the Recoveries_amt field.
   */
  public void setRecoveries_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Recoveries_cur field.
   */
  public void setRecoveries_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the RemainingReserves field.
   */
  public void setRemainingReserves(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the RemainingReserves_amt field.
   */
  public void setRemainingReserves_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the RemainingReserves_cur field.
   */
  public void setRemainingReserves_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TotalPaid field.
   */
  public void setTotalPaid(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalPaid_amt field.
   */
  public void setTotalPaid_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalPaid_cur field.
   */
  public void setTotalPaid_cur(typekey.Currency value);
  
  
  
}