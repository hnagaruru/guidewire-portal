package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NotificationActionType.tti;NotificationActionType.tix;NotificationActionType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class NotificationActionType implements gw.entity.TypeKey {
  /**
   * Failure to cooperate
   * Failure to cooperate
   */
  public static final typekey.NotificationActionType TC_COOPERATION = new typekey.NotificationActionType("cooperation");
  
  /**
   * Fraud Cancellation
   * Notification requirement in days for fraud cancellation
   */
  public static final typekey.NotificationActionType TC_FRAUDCANCEL = new typekey.NotificationActionType("fraudcancel");
  
  /**
   * Increase in hazard
   * Increase in hazard
   */
  public static final typekey.NotificationActionType TC_HAZARDINCREASE = new typekey.NotificationActionType("hazardincrease");
  
  /**
   * Driver Lic. Loss/Suspension
   * Driver Lic. Loss/Suspension
   */
  public static final typekey.NotificationActionType TC_LICENSE = new typekey.NotificationActionType("license");
  
  /**
   * Material Change Renewal
   * Notification requirement in days for material change renewal
   */
  public static final typekey.NotificationActionType TC_MATCHANGE = new typekey.NotificationActionType("matchange");
  
  /**
   * Moral Hazard
   * Moral Hazard
   */
  public static final typekey.NotificationActionType TC_MORALHAZARD = new typekey.NotificationActionType("moralhazard");
  
  /**
   * Non-payment Cancellation
   * Notification requirement in days for non-payment cancellation
   */
  public static final typekey.NotificationActionType TC_NONPAYCANCEL = new typekey.NotificationActionType("nonpaycancel");
  
  /**
   * Non-renewal Renewal
   * Notification requirement in days for non-renewal renewal
   */
  public static final typekey.NotificationActionType TC_NONRENEW = new typekey.NotificationActionType("nonrenew");
  
  /**
   * Non-renewal Maximum
   * Non renewal max (in days)
   */
  public static final typekey.NotificationActionType TC_NONRENEWMAX = new typekey.NotificationActionType("nonrenewmax");
  
  /**
   * Non-renewal Minimum
   * Non renewal min (in days)
   */
  public static final typekey.NotificationActionType TC_NONRENEWMIN = new typekey.NotificationActionType("nonrenewmin");
  
  /**
   * Other Cancellation
   * Notification requirement in days for other cancellation
   */
  public static final typekey.NotificationActionType TC_OTHERCANCEL = new typekey.NotificationActionType("othercancel");
  
  /**
   * Other Renewal
   * Notification requirement in days for other renewal
   */
  public static final typekey.NotificationActionType TC_OTHERRENEWAL = new typekey.NotificationActionType("otherrenewal");
  
  /**
   * Premium Increase
   * Premium increase notification requirement in days
   */
  public static final typekey.NotificationActionType TC_PREMINCREASE = new typekey.NotificationActionType("premincrease");
  
  /**
   * Increase in rates
   * Increase in rates
   */
  public static final typekey.NotificationActionType TC_RATEINCREASE = new typekey.NotificationActionType("rateincrease");
  
  /**
   * Loss of Reinsurance
   * Loss of Reinsurance
   */
  public static final typekey.NotificationActionType TC_REINSURANCE = new typekey.NotificationActionType("reinsurance");
  
  /**
   * Other Cancellation in UW Period
   * Other cancel in UW Period
   */
  public static final typekey.NotificationActionType TC_UWOTHERCANCEL = new typekey.NotificationActionType("uwothercancel");
  
  /**
   * Underwriting Period
   * Underwriting period in days
   */
  public static final typekey.NotificationActionType TC_UWPERIOD = new typekey.NotificationActionType("uwperiod");
  
  /**
   * Fraud Cancellation in UW Period
   * Fraud Cancellation in UW Period
   */
  public static final typekey.NotificationActionType TC_UWPERIODFRAUDCANCEL = new typekey.NotificationActionType("uwperiodfraudcancel");
  
  /**
   * Increase in Hazard in UW Period
   * Increase in Hazard in UW Period
   */
  public static final typekey.NotificationActionType TC_UWPERIODHAZARDINCREASE = new typekey.NotificationActionType("uwperiodhazardincrease");
  
  /**
   * NonPayment in UW Period
   * NonPayment in UW Period
   */
  public static final typekey.NotificationActionType TC_UWPERIODNONPAYCANCEL = new typekey.NotificationActionType("uwperiodnonpaycancel");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.NotificationActionType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.NotificationActionType>("NotificationActionType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private NotificationActionType(java.lang.String code)  {
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
  public typekey.NotificationActionType get() {
    return this;
  }
  
  public static typekey.NotificationActionType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.NotificationActionType> getAllTypeKeys() {
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
  
  public static typekey.NotificationActionType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.NotificationActionType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.NotificationActionType[]{});
  }
  
  public static java.util.List<typekey.NotificationActionType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.NotificationActionType getValue() {
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
    com.guidewire._generated.typekey.NotificationActionTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.NotificationActionType>() {
      public void clearCache(typekey.NotificationActionType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.NotificationActionType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.NotificationActionType newInstance(java.lang.String code) {
        return new typekey.NotificationActionType(code);
      }
      
      
    });
  }
}