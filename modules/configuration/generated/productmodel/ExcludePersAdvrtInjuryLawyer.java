package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludePersAdvrtInjuryLawyer.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludePersAdvrtInjuryLawyer extends entity.GeneralLiabilityExcl {
  protected ExcludePersAdvrtInjuryLawyer()  {
    super((java.lang.Void)null);
  }
  
  public ExcludePersAdvrtInjuryLawyer(entity.PolicyPeriod branch)  {
    super(branch, "ExcludePersAdvrtInjuryLawyer");
  }
  
  public ExcludePersAdvrtInjuryLawyer(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludePersAdvrtInjuryLawyer");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludePersAdvrtInjuryLawyerInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludePersAdvrtInjuryLawyer>() {
      public productmodel.ExcludePersAdvrtInjuryLawyer newEmptyInstance() {
        return new productmodel.ExcludePersAdvrtInjuryLawyer();
      }
      
      
    });
  }
}