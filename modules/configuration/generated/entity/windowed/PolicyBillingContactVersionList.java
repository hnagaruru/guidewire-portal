package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyBillingContact.eti;PolicyBillingContact.eix;PolicyBillingContact.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyBillingContactVersionList extends entity.windowed.PolicyContactRoleVersionList {
  entity.PolicyBillingContact AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyBillingContact> getAllVersions();
  
  
  
}