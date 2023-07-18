package entity;

/**
 * RICededPremium
 * 
 *       A delegate for RICededPremium, which is essentially a join entity between the
 *       reinsured risk (RIRisk), the Cost that is ceding to that risk, and the
 *       individual cedings that are given over to the multiple agreements which may
 *       reinsure the risk.   The entities other than RIRisk are delegates that are
 *       implemented by entities which are specific to a line of business.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICededPremium.eti;RICededPremium.eix;RICededPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface RICededPremium extends entity.SimpleEffDated, entity.Extractable, gw.api.reinsurance.RICededPremiumAdapter {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RICededPremium> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RICededPremium>("entity.RICededPremium");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYTERM_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("PolicyTerm", "PolicyTerm");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RISKDATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("RiskDate", "RiskDate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RISKNUMBER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("RiskNumber", "RiskNumber");
  
  /**
   * Gets the value of the PolicyTerm field.
   * The policy term to which this ceding applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  /**
   * Gets the value of the RiskDate field.
   * Effective date of the associated risk
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRiskDate();
  
  
  /**
   * Gets the value of the RiskNumber field.
   * Risk number, copied from the Reinsurable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber();
  
  
  /**
   * Returns true if this is effective for the given period.
   * @param start start of the period
   * @param end end of the period
   * @return true if effective window overlaps given dates, false otherwise
   */
  public boolean isEffective(java.util.Date start, java.util.Date end);
  
  
  /**
   * Returns true if this is effective at the given date.
   * @param date the date to check
   * @return true if this is effective at given date, false otherwise
   */
  public boolean isEffectiveAt(java.util.Date date);
  
  
  /**
   * Returns true if the effective window of this overlaps with the effective window of other.
   * @param other the other eff dated
   * @return true if the effective windows of this and other overlap, false otherwise.
   */
  public boolean isOverlap(entity.SimpleEffDated other);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  /**
   * Sets the value of the RiskDate field.
   */
  public void setRiskDate(java.util.Date value);
  
  
  /**
   * Sets the value of the RiskNumber field.
   */
  public void setRiskNumber(java.lang.String value);
  
  
  
}