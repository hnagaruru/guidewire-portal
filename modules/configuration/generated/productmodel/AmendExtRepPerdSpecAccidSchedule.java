package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/AmendExtRepPerdSpecAccidSchedule.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class AmendExtRepPerdSpecAccidSchedule extends entity.GLLineScheduleCond {
  protected AmendExtRepPerdSpecAccidSchedule()  {
    super((java.lang.Void)null);
  }
  
  public AmendExtRepPerdSpecAccidSchedule(entity.PolicyPeriod branch)  {
    super(branch, "AmendExtRepPerdSpecAccidSchedule");
  }
  
  public AmendExtRepPerdSpecAccidSchedule(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "AmendExtRepPerdSpecAccidSchedule");
  }
  
  static {
    com.guidewire._generated.productmodel.AmendExtRepPerdSpecAccidScheduleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.AmendExtRepPerdSpecAccidSchedule>() {
      public productmodel.AmendExtRepPerdSpecAccidSchedule newEmptyInstance() {
        return new productmodel.AmendExtRepPerdSpecAccidSchedule();
      }
      
      
    });
  }
}