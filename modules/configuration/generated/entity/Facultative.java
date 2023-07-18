package entity;

/**
 * Facultative
 * Facultative Reinsurance Agreement.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Facultative.eti;Facultative.eix;Facultative.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Facultative extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Facultative> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Facultative>("entity.Facultative");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDPREMIUM_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("CededPremium", "CededPremium");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDPREMIUM_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CededPremium_amt", "CededPremium");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDPREMIUM_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("CededPremium_cur", "CededPremium_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FLATPREMIUMADJUSTED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("FlatPremiumAdjusted", "FlatPremiumAdjusted");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MARKUP_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("MarkUp", "MarkUp");
  
  /**
   * Returns a list of attached risks taking into account inserted and removed beans in the bundle.
   * Edited beans in the bundle have no affect.
   * @param bundle bundle with any uncommitted changes
   * @return a list of attached risks
   */
  public java.util.List<entity.RIPolicyAttachment> getAttachments(gw.pl.persistence.core.Bundle bundle);
  
  
  /**
   * Gets the value of the CededPremium field.
   * Defined as an actual amount rather than a rate.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededPremium();
  
  
  /**
   * Gets the value of the CededPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededPremium_amt();
  
  
  /**
   * Gets the value of the CededPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededPremium_cur();
  
  
  /**
   * currency for facultative
   * @return 
   */
  public typekey.Currency getFacultativeCurrency();
  
  
  /**
   * Gets the value of the MarkUp field.
   * Additional amount (expressed as % of ceded premium) that should be subtracted from direct premiums when determining the net premium for ceding to other agreements.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMarkUp();
  
  
  /**
   * Gets the value of the FlatPremiumAdjusted field.
   * True if flat premium is adjusted for each participant.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFlatPremiumAdjusted();
  
  
  /**
   * Sets the value of the CededPremium field.
   */
  public void setCededPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the FlatPremiumAdjusted field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setFlatPremiumAdjusted(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the MarkUp field.
   */
  public void setMarkUp(java.math.BigDecimal value);
  
  
  
}