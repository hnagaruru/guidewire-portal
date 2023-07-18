package productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPAssistedLivingCare.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public interface ScheduledItemHOPAssistedLivingCareSched extends gw.api.domain.ScheduledItem {
  productmodel.HOPAssistedLivingCare getClause();
  
  
  java.lang.String getFacilityLocation();
  
  
  java.lang.String getFacilityName();
  
  
  java.lang.String getRelativesName();
  
  
  void setFacilityLocation(java.lang.String facilityLocation);
  
  
  void setFacilityName(java.lang.String facilityName);
  
  
  void setRelativesName(java.lang.String relativesName);
  
  
  
}