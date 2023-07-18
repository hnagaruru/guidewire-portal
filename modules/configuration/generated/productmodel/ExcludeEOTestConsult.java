package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeEOTestConsult.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeEOTestConsult extends entity.GeneralLiabilityExcl {
  protected ExcludeEOTestConsult()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeEOTestConsult(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeEOTestConsult");
  }
  
  public ExcludeEOTestConsult(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeEOTestConsult");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeEOTestConsultInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeEOTestConsult>() {
      public productmodel.ExcludeEOTestConsult newEmptyInstance() {
        return new productmodel.ExcludeEOTestConsult();
      }
      
      
    });
  }
}