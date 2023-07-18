package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPAdditionalCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPAdditionalCov extends entity.BusinessOwnersCov {
  protected BOPAdditionalCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPAdditionalCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPAdditionalCov");
  }
  
  public BOPAdditionalCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPAdditionalCov");
  }
  
  public boolean getHasSBSpecialPacksTerm() {
    return hasCovTerm("SBSpecialPacks");
  }
  
  public productmodel.TypekeySBSpecialPacksType getSBSpecialPacksTerm() {
    return (productmodel.TypekeySBSpecialPacksType)getCovTerm("SBSpecialPacks");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPAdditionalCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPAdditionalCov>() {
      public productmodel.BOPAdditionalCov newEmptyInstance() {
        return new productmodel.BOPAdditionalCov();
      }
      
      
    });
  }
}