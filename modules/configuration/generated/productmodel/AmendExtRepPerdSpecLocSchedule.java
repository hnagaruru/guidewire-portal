package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/AmendExtRepPerdSpecLocSchedule.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class AmendExtRepPerdSpecLocSchedule extends entity.GLLineScheduleCond {
  protected AmendExtRepPerdSpecLocSchedule()  {
    super((java.lang.Void)null);
  }
  
  public AmendExtRepPerdSpecLocSchedule(entity.PolicyPeriod branch)  {
    super(branch, "AmendExtRepPerdSpecLocSchedule");
  }
  
  public AmendExtRepPerdSpecLocSchedule(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "AmendExtRepPerdSpecLocSchedule");
  }
  
  static {
    com.guidewire._generated.productmodel.AmendExtRepPerdSpecLocScheduleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.AmendExtRepPerdSpecLocSchedule>() {
      public productmodel.AmendExtRepPerdSpecLocSchedule newEmptyInstance() {
        return new productmodel.AmendExtRepPerdSpecLocSchedule();
      }
      
      
    });
  }
}