package entity;

/**
 * UWIssueDelegate
 * An issue which may be raised in regard to a policy. Entities which implement this delegate are UWIssue and UWReferralReason.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWIssueDelegate.eti;UWIssueDelegate.eix;UWIssueDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface UWIssueDelegate extends gw.pl.persistence.core.Bean, gw.pc.policy.entity.UWIssueDescriptorsAdapter {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.UWIssueDelegate> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.UWIssueDelegate>("entity.UWIssueDelegate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ISSUEKEY_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("IssueKey", "IssueKey");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ISSUETYPE_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("IssueType", "IssueTypeID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VALUE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Value", "Value");
  
  /**
   * Gets the value of the IssueKey field.
   * The unique key used to identify this issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIssueKey();
  
  
  /**
   * Gets the value of the IssueType field.
   * The type of this issue, used to match issues and to determine what authority grant is required in order to approve the issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getIssueType();
  
  
  /**
   * Gets the value of the Value field.
   * The value, if any, associated with this issue. If present, the value will be used to compare with authority grants to determine if a user can approve this issue, and with approvals themselves to determine if the approval still applies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue();
  
  
  /**
   * Sets the value of the IssueKey field.
   */
  public void setIssueKey(java.lang.String value);
  
  
  /**
   * Sets the value of the IssueType field.
   */
  public void setIssueType(entity.UWIssueType value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}