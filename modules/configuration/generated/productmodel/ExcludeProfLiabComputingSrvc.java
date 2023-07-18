package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProfLiabComputingSrvc.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeProfLiabComputingSrvc extends entity.GeneralLiabilityExcl {
  protected ExcludeProfLiabComputingSrvc()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeProfLiabComputingSrvc(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeProfLiabComputingSrvc");
  }
  
  public ExcludeProfLiabComputingSrvc(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeProfLiabComputingSrvc");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeProfLiabComputingSrvcInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeProfLiabComputingSrvc>() {
      public productmodel.ExcludeProfLiabComputingSrvc newEmptyInstance() {
        return new productmodel.ExcludeProfLiabComputingSrvc();
      }
      
      
    });
  }
}