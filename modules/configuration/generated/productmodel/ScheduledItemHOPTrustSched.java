package productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPTrust.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public interface ScheduledItemHOPTrustSched extends gw.api.domain.ScheduledItem {
  productmodel.HOPTrust getClause();
  
  
  java.lang.String getTrusteeAddress();
  
  
  java.lang.String getTrusteeName();
  
  
  void setTrusteeAddress(java.lang.String trusteeAddress);
  
  
  void setTrusteeName(java.lang.String trusteeName);
  
  
  
}