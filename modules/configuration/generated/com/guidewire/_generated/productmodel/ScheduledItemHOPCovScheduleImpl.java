package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledPersonalProperty.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPCovScheduleImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPCovSchedule {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> AppraisalInfoValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> AppraiserValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.util.Date> DateOfAppraisalValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> DescriptionValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> SerialNoValueProvider;
  
  public ScheduledItemHOPCovScheduleImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    DescriptionValueProvider  =  getClause().getPropertyInfosMap().get("HOPScheduleItemDescription").createValueProvider(scheduledItemEntity);
    SerialNoValueProvider  =  getClause().getPropertyInfosMap().get("HOPCovScheduleItemSerialNo").createValueProvider(scheduledItemEntity);
    AppraiserValueProvider  =  getClause().getPropertyInfosMap().get("HOPScheduleItemAppraiser").createValueProvider(scheduledItemEntity);
    AppraisalInfoValueProvider  =  getClause().getPropertyInfosMap().get("HOPScheduleItemAppraisalInfo").createValueProvider(scheduledItemEntity);
    DateOfAppraisalValueProvider  =  getClause().getPropertyInfosMap().get("HOPScheduleItemPropDateOfAppraisal").createValueProvider(scheduledItemEntity);
  }
  
  public java.lang.String getAppraisalInfo() {
    return AppraisalInfoValueProvider.getValue();
  }
  
  public java.lang.String getAppraiser() {
    return AppraiserValueProvider.getValue();
  }
  
  public productmodel.HOPScheduledPersonalProperty getClause() {
    return (productmodel.HOPScheduledPersonalProperty)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.util.Date getDateOfAppraisal() {
    return DateOfAppraisalValueProvider.getValue();
  }
  
  public java.lang.String getDescription() {
    return DescriptionValueProvider.getValue();
  }
  
  public java.lang.String getSerialNo() {
    return SerialNoValueProvider.getValue();
  }
  
  public void setAppraisalInfo(java.lang.String appraisalInfo) {
    AppraisalInfoValueProvider.setValue(appraisalInfo);
  }
  
  public void setAppraiser(java.lang.String appraiser) {
    AppraiserValueProvider.setValue(appraiser);
  }
  
  public void setDateOfAppraisal(java.util.Date dateOfAppraisal) {
    DateOfAppraisalValueProvider.setValue(dateOfAppraisal);
  }
  
  public void setDescription(java.lang.String description) {
    DescriptionValueProvider.setValue(description);
  }
  
  public void setSerialNo(java.lang.String serialNo) {
    SerialNoValueProvider.setValue(serialNo);
  }
  
  
}