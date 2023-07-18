package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigPremises.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDesigPremises extends entity.GeneralLiabilityExcl {
  protected ExcludeDesigPremises()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDesigPremises(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDesigPremises");
  }
  
  public ExcludeDesigPremises(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDesigPremises");
  }
  
  public productmodel.GenericDesigPremisesType getDesigPremisesTerm() {
    return (productmodel.GenericDesigPremisesType)getCovTerm("DesigPremises");
  }
  
  public boolean getHasDesigPremisesTerm() {
    return hasCovTerm("DesigPremises");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDesigPremisesInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDesigPremises>() {
      public productmodel.ExcludeDesigPremises newEmptyInstance() {
        return new productmodel.ExcludeDesigPremises();
      }
      
      
    });
  }
}