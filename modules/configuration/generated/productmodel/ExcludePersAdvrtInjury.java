package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludePersAdvrtInjury.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludePersAdvrtInjury extends entity.GeneralLiabilityExcl {
  protected ExcludePersAdvrtInjury()  {
    super((java.lang.Void)null);
  }
  
  public ExcludePersAdvrtInjury(entity.PolicyPeriod branch)  {
    super(branch, "ExcludePersAdvrtInjury");
  }
  
  public ExcludePersAdvrtInjury(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludePersAdvrtInjury");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludePersAdvrtInjuryInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludePersAdvrtInjury>() {
      public productmodel.ExcludePersAdvrtInjury newEmptyInstance() {
        return new productmodel.ExcludePersAdvrtInjury();
      }
      
      
    });
  }
}