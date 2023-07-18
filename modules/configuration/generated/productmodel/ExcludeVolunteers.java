package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeVolunteers.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeVolunteers extends entity.GeneralLiabilityExcl {
  protected ExcludeVolunteers()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeVolunteers(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeVolunteers");
  }
  
  public ExcludeVolunteers(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeVolunteers");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeVolunteersInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeVolunteers>() {
      public productmodel.ExcludeVolunteers newEmptyInstance() {
        return new productmodel.ExcludeVolunteers();
      }
      
      
    });
  }
}