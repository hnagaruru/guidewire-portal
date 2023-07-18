package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCJurisdictionCostType.tti;WCJurisdictionCostType.tix;WCJurisdictionCostType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class WCJurisdictionCostType implements gw.entity.TypeKey {
  /**
   * Cancellation short-rate penalty
   * Cancellation penalty determined by short-rate.
   */
  public static final typekey.WCJurisdictionCostType TC_CANCELSHORTRATEPENALTY = new typekey.WCJurisdictionCostType("CancelShortRatePenalty");
  
  /**
   * CIGA surcharge
   * CA Insurance Guarantee Assoc surcharge
   */
  public static final typekey.WCJurisdictionCostType TC_CIGA = new typekey.WCJurisdictionCostType("CIGA");
  
  /**
   * Expense constant
   * Expense constant
   */
  public static final typekey.WCJurisdictionCostType TC_EXPENSECONST = new typekey.WCJurisdictionCostType("ExpenseConst");
  
  /**
   * Experience modifier
   * Workers' comp experience modifier credit or debit
   */
  public static final typekey.WCJurisdictionCostType TC_EXPMOD = new typekey.WCJurisdictionCostType("ExpMod");
  
  /**
   * Minimum Premium Adjustment
   * Additional premium charged so that standard premium for the policy or state meets a minimum amount
   */
  public static final typekey.WCJurisdictionCostType TC_MINPREM = new typekey.WCJurisdictionCostType("MinPrem");
  
  /**
   * Premium discount
   * Premium discount
   */
  public static final typekey.WCJurisdictionCostType TC_PREMDIS = new typekey.WCJurisdictionCostType("PremDis");
  
  /**
   * Schedule credit
   * Premium adjustment based on evaluation of the insured's risk relative to the average risk of others in the same class
   */
  public static final typekey.WCJurisdictionCostType TC_SCHEDCREDIT = new typekey.WCJurisdictionCostType("SchedCredit");
  
  /**
   * Tax
   * Tax
   */
  public static final typekey.WCJurisdictionCostType TC_TAX = new typekey.WCJurisdictionCostType("Tax");
  
  /**
   * Terrorism premium
   * Terrorism premium
   */
  public static final typekey.WCJurisdictionCostType TC_TERRORPREM = new typekey.WCJurisdictionCostType("TerrorPrem");
  
  /**
   * Waiver charge
   * Extra charge for waiver of subrogation
   */
  public static final typekey.WCJurisdictionCostType TC_WAIVER = new typekey.WCJurisdictionCostType("Waiver");
  
  /**
   * Emp liab increased limits
   * Premium for workers' comp employers liability limits above the base (standard) amounts
   */
  public static final typekey.WCJurisdictionCostType TC_WCEL = new typekey.WCJurisdictionCostType("WCEL");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.WCJurisdictionCostType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.WCJurisdictionCostType>("WCJurisdictionCostType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private WCJurisdictionCostType(java.lang.String code)  {
    _typeKeyImplManager  =  com.guidewire.commons.typelist.TypeKeyImplManager.newInstance(this, code);
  }
  
  public int compareTo(gw.entity.TypeKey arg0) {
    return _typeKeyImplManager.getTypeKeyImpl().compareTo(arg0);
  }
  
  /**
   * 
   * @deprecated Use this object instead.
   */
  @java.lang.Deprecated
  public typekey.WCJurisdictionCostType get() {
    return this;
  }
  
  public static typekey.WCJurisdictionCostType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.WCJurisdictionCostType> getAllTypeKeys() {
    return TYPE.get().getTypeKeys(true);
  }
  
  /**
   * Returns the list of categories that this key belongs to
   * @return the categories that this key belongs to
   */
  public gw.entity.TypeKey[] getCategories() {
    return _typeKeyImplManager.getTypeKeyImpl().getCategories();
  }
  
  public java.lang.String getCode() {
    return _typeKeyImplManager.getCode();
  }
  
  /**
   * Returns the description for this typekey for the current locale.
   * @return the description for this typekey
   */
  public java.lang.String getDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription();
  }
  
  /**
   * Returns the description of this typekey for the given locale.
   * @param locale the locale to use to get the description
   * @return a description for this typekey for the given locale
   */
  public java.lang.String getDescription(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription(locale);
  }
  
  public java.lang.String getDisplayName() {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName();
  }
  
  /**
   * Returns the name of this typekey for the given locale.
   * @param locale 
   */
  public java.lang.String getDisplayName(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName(locale);
  }
  
  /**
   * Gets the entity type associated with this typekey, if any. Returns null if this is not a subtype typekey.
   */
  public gw.entity.IEntityType getEntityType() {
    return _typeKeyImplManager.getTypeKeyImpl().getEntityType();
  }
  
  /**
   * Returns the owning type for this key.
   * @return 
   */
  public gw.entity.ITypeList getIntrinsicType() {
    return _typeKeyImplManager.getTypeKeyImpl().getIntrinsicType();
  }
  
  /**
   * A string containing the typelist name.
   */
  public java.lang.String getListName() {
    return _typeKeyImplManager.getTypeKeyImpl().getListName();
  }
  
  /**
   * Returns the value of the "name" attribute for this typekey.
   * @return the name of this typekey
   * @deprecated Use {@link #getDisplayName()} or {@link #getUnlocalizedName()} instead, as appropriate.
   */
  @java.lang.Deprecated
  public java.lang.String getName() {
    return _typeKeyImplManager.getTypeKeyImpl().getName();
  }
  
  public int getOrdinal() {
    return _typeKeyImplManager.getTypeKeyImpl().getOrdinal();
  }
  
  /**
   * Returns the priority for this type key
   * @return the priority for this type key
   */
  public int getPriority() {
    return _typeKeyImplManager.getTypeKeyImpl().getPriority();
  }
  
  /**
   * Returns the sort order for this type key in the specified language.
   * @param locale 
   * @return the sort order for this type key
   */
  public int getSortOrder(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getSortOrder(locale);
  }
  
  public static typekey.WCJurisdictionCostType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.WCJurisdictionCostType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.WCJurisdictionCostType[]{});
  }
  
  public static java.util.List<typekey.WCJurisdictionCostType> getTypeKeys(boolean includeRetired) {
    return TYPE.get().getTypeKeys(includeRetired);
  }
  
  /**
   * Returns the (non-localized) description of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDescription()} instead.
   * @return the non-localized description of this typekey
   */
  public java.lang.String getUnlocalizedDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedDescription();
  }
  
  /**
   * Returns the (non-localized) name of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDisplayName()} instead. To get a unique string identifier for this typekey,
   * use {@link #getCode()} instead.
   * @return the non-localized name of this typekey
   */
  public java.lang.String getUnlocalizedName() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedName();
  }
  
  public typekey.WCJurisdictionCostType getValue() {
    return this;
  }
  
  /**
   * Checks to see if this typekey has a category corresponding to the given
   * typekey.  For a match to be found, this typekey has to have a category
   * with the same typelist and code as the given typekey.
   * @param categoryToCheck 
   * @return 
   */
  public boolean hasCategory(gw.entity.TypeKey categoryToCheck) {
    return _typeKeyImplManager.getTypeKeyImpl().hasCategory(categoryToCheck);
  }
  
  /**
   * A boolean that indicates a type code is for internal use by Guidewire software. Internal type codes cannot be
   * removed or modified.
   */
  public boolean isInternal() {
    return _typeKeyImplManager.getTypeKeyImpl().isInternal();
  }
  
  /**
   * Returns true if this type key is retired.  Retired type keys will not show up in the UI.
   * @return true if this type key is retired false if not.
   */
  public boolean isRetired() {
    return _typeKeyImplManager.getTypeKeyImpl().isRetired();
  }
  
  private java.lang.Object readObject(java.io.ObjectInputStream in) throws java.io.InvalidObjectException {
    throw new java.io.InvalidObjectException("Proxy required");
  }
  
  public java.lang.String toString() {
    return getDisplayName();
  }
  
  private java.lang.Object writeReplace() {
    return new com.guidewire.commons.typelist.TypeKeySerializationProxy(this);
  }
  
  static {
    com.guidewire._generated.typekey.WCJurisdictionCostTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.WCJurisdictionCostType>() {
      public void clearCache(typekey.WCJurisdictionCostType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.WCJurisdictionCostType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.WCJurisdictionCostType newInstance(java.lang.String code) {
        return new typekey.WCJurisdictionCostType(code);
      }
      
      
    });
  }
}