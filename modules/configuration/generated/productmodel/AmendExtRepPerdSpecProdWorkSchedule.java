package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/AmendExtRepPerdSpecProdWorkSchedule.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class AmendExtRepPerdSpecProdWorkSchedule extends entity.GLLineScheduleCond {
  protected AmendExtRepPerdSpecProdWorkSchedule()  {
    super((java.lang.Void)null);
  }
  
  public AmendExtRepPerdSpecProdWorkSchedule(entity.PolicyPeriod branch)  {
    super(branch, "AmendExtRepPerdSpecProdWorkSchedule");
  }
  
  public AmendExtRepPerdSpecProdWorkSchedule(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "AmendExtRepPerdSpecProdWorkSchedule");
  }
  
  static {
    com.guidewire._generated.productmodel.AmendExtRepPerdSpecProdWorkScheduleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.AmendExtRepPerdSpecProdWorkSchedule>() {
      public productmodel.AmendExtRepPerdSpecProdWorkSchedule newEmptyInstance() {
        return new productmodel.AmendExtRepPerdSpecProdWorkSchedule();
      }
      
      
    });
  }
}