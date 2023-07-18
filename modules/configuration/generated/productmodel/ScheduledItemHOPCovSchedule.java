package productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledPersonalProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public interface ScheduledItemHOPCovSchedule extends gw.api.domain.ScheduledItem {
  java.lang.String getAppraisalInfo();
  
  
  java.lang.String getAppraiser();
  
  
  productmodel.HOPScheduledPersonalProperty getClause();
  
  
  java.util.Date getDateOfAppraisal();
  
  
  java.lang.String getDescription();
  
  
  java.lang.String getSerialNo();
  
  
  void setAppraisalInfo(java.lang.String appraisalInfo);
  
  
  void setAppraiser(java.lang.String appraiser);
  
  
  void setDateOfAppraisal(java.util.Date dateOfAppraisal);
  
  
  void setDescription(java.lang.String description);
  
  
  void setSerialNo(java.lang.String serialNo);
  
  
  
}