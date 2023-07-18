package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeFungi.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeFungi extends entity.GeneralLiabilityExcl {
  protected ExcludeFungi()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeFungi(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeFungi");
  }
  
  public ExcludeFungi(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeFungi");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeFungiInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeFungi>() {
      public productmodel.ExcludeFungi newEmptyInstance() {
        return new productmodel.ExcludeFungi();
      }
      
      
    });
  }
}