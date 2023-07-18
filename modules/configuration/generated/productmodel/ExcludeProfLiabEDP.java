package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeProfLiabEDP.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeProfLiabEDP extends entity.GeneralLiabilityExcl {
  protected ExcludeProfLiabEDP()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeProfLiabEDP(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeProfLiabEDP");
  }
  
  public ExcludeProfLiabEDP(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeProfLiabEDP");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeProfLiabEDPInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeProfLiabEDP>() {
      public productmodel.ExcludeProfLiabEDP newEmptyInstance() {
        return new productmodel.ExcludeProfLiabEDP();
      }
      
      
    });
  }
}